#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeColorSelectionMode.hpp"

class smartprops_CSmartPropOperation_MaterialTint {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeMaterialName m_Material;
    smartprops_CSmartPropAttributeColorSelectionMode m_SelectionMode;
    CSmartPropAttributeColor m_Color;
    CColorGradient m_Gradient;
    CSmartPropAttributeFloat m_ColorPosition;
};
