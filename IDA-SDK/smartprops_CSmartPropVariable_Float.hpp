#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_Float {
    char vTable2543[0x8];
    int32_t m_nElementID;
    char end_pad_2544[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2576[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    float32 m_DefaultValue;
    float32 m_flParamaterMinValue;
    float32 m_flParamaterMaxValue;
    char end_pad_2586[0x4];
};
