#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeChoiceSelectionMode.hpp"

class smartprops_CSmartPropOperation_RandomColorTintColor {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    smartprops_CSmartPropAttributeChoiceSelectionMode m_SelectionMode;
    CSmartPropAttributeFloat m_ColorPosition;
    smartprops_ApplyColorMode_t m_Mode;
    char pad_2565[0x4];
    CColorGradient m_Gradient;
};
