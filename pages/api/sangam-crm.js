export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required.",
      });
    }

const payload = {
  module_name: "Lead",
  field_name_list: {
    last_name: name || "Website Lead",
    lead_source: "Websites",
    phone: phone,
    email: email,
    comment: message,
  },
};

    const crmResponse = await fetch(
      "https://studenthousing.sangamcrm.com/api/v1/save-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 77hkP5qjAY2DZT7cQj3ksce0Cd6GUnLb",
        },
        body: JSON.stringify(payload),
      }
    );

    const crmText = await crmResponse.text();

    if (!crmResponse.ok) {
      return res.status(500).json({
        success: false,
        message: "CRM rejected the request",
        status: crmResponse.status,
        response: crmText,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lead sent to CRM successfully",
      response: crmText,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
}