#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropVariable_RadiusPlacementMode {
    char vTable2543[0x8];
    int32_t m_nElementID;
    char end_pad_2544[0x4];
    CUtlString m_VariableName;
    bool m_bExposeAsParameter;
    char pad_2576[0x7];
    CUtlString m_DisplayName;
    CUtlString m_HideExpression;
    CUtlString m_ReadOnlyExpression;
    smartprops_SmartPropRadiusPlacementMode_t m_DefaultValue;
    char end_pad_2592[0x4];
};
