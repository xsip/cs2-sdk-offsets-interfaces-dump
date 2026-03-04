#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_ChoiceSelectionMode {
    void **__vftable_0;
    int32_t m_nElementID;
    char end_pad_2619[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2651[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    smartprops_SmartPropChoiceSelectionMode_t m_DefaultValue;
    char end_pad_2655[0x4];
};
