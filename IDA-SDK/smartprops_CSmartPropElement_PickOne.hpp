#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeChoiceSelectionMode.hpp"

class smartprops_CSmartPropElement_PickOne {
    char vTable2544[0x8];
    int32_t m_nElementID;
    char pad_2545[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    smartprops_CSmartPropAttributeChoiceSelectionMode m_SelectionMode;
    CSmartPropAttributeInt m_SpecificChildIndex;
    CUtlString m_OutputChoiceVariableName;
    CSmartPropAttributeBool m_bConfigurable;
    CSmartPropAttributeVector m_vHandleOffset;
    CSmartPropAttributeColor m_HandleColor;
    CSmartPropAttributeInt m_HandleSize;
    smartprops_ConfigurationHandleShape_t m_HandleShape;
    char end_pad_2552[0x4];
};
