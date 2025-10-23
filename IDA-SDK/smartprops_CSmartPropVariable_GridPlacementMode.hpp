#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_GridPlacementMode {
    char vTable2542[0x8];
    int32_t m_nElementID;
    char end_pad_2543[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2575[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    smartprops_SmartPropGridPlacementMode_t m_DefaultValue;
    char end_pad_2587[0x4];
};
