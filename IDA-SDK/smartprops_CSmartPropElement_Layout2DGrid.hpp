#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeGridPlacementMode.hpp"
#include "smartprops_CSmartPropAttributeGridOriginMode.hpp"

class smartprops_CSmartPropElement_Layout2DGrid {
    char vTable2545[0x8];
    int32_t m_nElementID;
    char pad_2546[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    CSmartPropAttributeFloat m_flWidth;
    CSmartPropAttributeFloat m_flLength;
    CSmartPropAttributeBool m_bVerticalLength;
    smartprops_CSmartPropAttributeGridPlacementMode m_GridArrangement;
    smartprops_CSmartPropAttributeGridOriginMode m_GridOriginMode;
    CSmartPropAttributeInt m_nCountW;
    CSmartPropAttributeInt m_nCountL;
    CSmartPropAttributeFloat m_flSpacingWidth;
    CSmartPropAttributeFloat m_flSpacingLength;
    CSmartPropAttributeBool m_bAlternateShift;
    CSmartPropAttributeFloat m_flAlternateShiftWidth;
    CSmartPropAttributeFloat m_flAlternateShiftLength;
};
