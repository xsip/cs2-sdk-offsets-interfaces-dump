#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropChoiceOption {
    CUtlString m_Name;
    CUtlString m_DisplayName;
    char m_VariableValues[0x18];
};
