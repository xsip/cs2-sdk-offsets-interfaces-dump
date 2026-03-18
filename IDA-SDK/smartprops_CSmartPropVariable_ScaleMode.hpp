#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_ScaleMode {
    void **__vftable_0;
    int32_t m_nElementID;
    char end_pad_2638[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2670[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    smartprops_ScaleMode_t m_DefaultValue;
    char end_pad_2687[0x4];
};
