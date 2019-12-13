let db = {
  conStr: process.env.AUTHORIZE_DB_CON_STR,
  namespace_id: process.env.AUTHORIZE_DB_NAMESPACE_ID,
  prefix: process.env.AUTHORIZE_DB_PREFIX,
  home_form_id: process.env.AUTHORIZE_DB_HOME_FORM_ID,
  company_form_id: process.env.AUTHORIZE_DB_COMPANY_FORM_ID,
  enterprise_form_id:process.env.AUTHORIZE_DB_ENTERPRISE_FORM_ID,
  home_flow_id: process.env.AUTHORIZE_DB_HOME_FLOW_ID,
  update_entrprise_flow_id: process.env.AUTHORIZE_DB_UPDATE_ENTERPRISE_FLOW_ID,
  company_query_url: process.env.AUTHORIZE_DB_COMPANY_QUERY_URL,
  baseCompany: process.env.AUTHORIZE_DB_BASE_COMPANY,
  baseDescription: process.env.AUTHORIZE_DB_BASE_DESCRIPTION
};
module.exports = db
