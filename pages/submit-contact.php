<?php
// submit-contact.php

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed"
    ]);
    exit;
}

function clean_input($value) {
    return trim((string)$value);
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name    = clean_input($data["name"] ?? "");
$email   = clean_input($data["email"] ?? "");
$phone   = clean_input($data["phone"] ?? "");
$message = clean_input($data["message"] ?? "");

if ($name === "" || $email === "" || $phone === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Name, email, and phone are required."
    ]);
    exit;
}

// ============================
// SEND TO SANGAM CRM
// ============================
$crmUrl = "https://studenthousing.sangamcrm.com/api/v1/save-data";
$crmToken = "77hkP5qjAY2DZT7cQj3ksce0Cd6GUnLb"; // replace if needed

$payload = [
    "module_name" => "Lead",
    "field_name_list" => [
        "last_name"   => $name,
        "lead_source" => "Websites",
        "phone"       => $phone,   // keep +91 if you want it
        "email"       => $email
    ]
];

$ch = curl_init($crmUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $crmToken
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$crmResponse = curl_exec($ch);
$crmHttpCode  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$crmError     = curl_error($ch);
curl_close($ch);

if ($crmResponse === false) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "CRM request failed",
        "error" => $crmError
    ]);
    exit;
}

if ($crmHttpCode < 200 || $crmHttpCode >= 300) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "CRM rejected the request",
        "crm_status" => $crmHttpCode,
        "crm_response" => $crmResponse
    ]);
    exit;
}

// Optional: send email here too if needed

echo json_encode([
    "success" => true,
    "message" => "Form submitted successfully",
    "crm_response" => $crmResponse
]);