#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeChoiceSelectionMode.hpp"

class smartprops_CSmartPropOperation_RandomColorTintColor {
    void **__vftable_0;
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2654[0x8];
    smartprops_CSmartPropAttributeChoiceSelectionMode m_SelectionMode;
    CSmartPropAttributeFloat m_ColorPosition;
    smartprops_ApplyColorMode_t m_Mode;
    char pad_2659[0x4];
    CColorGradient m_Gradient;
};
