#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement_SmartProp {
    char vTable2545[0x8];
    int32_t m_nElementID;
    char pad_2546[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_sSmartProp[0xe0];
    bool m_bLocalEvaluationState;
    char end_pad_2557[0x7];
};
