#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeRadiusPlacementMode.hpp"
#include "smartprops_CSmartPropAttributeDistributionMode.hpp"

class smartprops_CSmartPropElement_PlaceInSphere {
    char vTable2545[0x8];
    int32_t m_nElementID;
    char pad_2546[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    smartprops_CSmartPropAttributeRadiusPlacementMode m_PlacementMode;
    smartprops_CSmartPropAttributeDistributionMode m_DistributionMode;
    CSmartPropAttributeFloat m_flRandomness;
    CSmartPropAttributeVector m_vPlaneUpDirection;
    CSmartPropAttributeInt m_nCountMin;
    CSmartPropAttributeInt m_nCountMax;
    CSmartPropAttributeFloat m_flPositionRadiusInner;
    CSmartPropAttributeFloat m_flPositionRadiusOuter;
    CSmartPropAttributeBool m_bAlignOrientation;
    CSmartPropAttributeVector m_vAlignDirection;
};
