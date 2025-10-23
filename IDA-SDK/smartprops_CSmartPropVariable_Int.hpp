#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_Int {
    char vTable2542[0x8];
    int32_t m_nElementID;
    char end_pad_2543[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2575[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    int32_t m_DefaultValue;
    int32_t m_nParamaterMinValue;
    int32_t m_nParamaterMaxValue;
    char end_pad_2588[0x4];
};
