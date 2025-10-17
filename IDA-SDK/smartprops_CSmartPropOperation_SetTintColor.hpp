#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeChoiceSelectionMode.hpp"
#include "smartprops_CSmartPropAttributeApplyColorMode.hpp"

class smartprops_CSmartPropOperation_SetTintColor {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    smartprops_CSmartPropAttributeChoiceSelectionMode m_SelectionMode;
    CSmartPropAttributeInt m_ColorSelection;
    smartprops_CSmartPropAttributeApplyColorMode m_Mode;
    char m_ColorChoices[0x18];
};
