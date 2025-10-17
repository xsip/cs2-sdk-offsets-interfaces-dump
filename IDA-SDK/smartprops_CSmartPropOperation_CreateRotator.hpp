#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_CreateRotator {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CUtlString m_Name;
    CSmartPropAttributeVector m_vOffset;
    CSmartPropAttributeVector m_vRotationAxis;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpace;
    CSmartPropAttributeFloat m_flDisplayRadius;
    CSmartPropAttributeColor m_DisplayColor;
    CSmartPropAttributeBool m_bApplyToCurrentTransform;
    CSmartPropAttributeFloat m_flSnappingIncrement;
    CSmartPropAttributeFloat m_flInitialAngle;
    CSmartPropAttributeBool m_bEnforceLimits;
    CSmartPropAttributeFloat m_flMinAngle;
    CSmartPropAttributeFloat m_flMaxAngle;
    CUtlString m_OutputVariable;
};
