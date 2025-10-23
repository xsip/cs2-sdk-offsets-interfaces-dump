#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropElement_PlaceOnPath {
    char vTable2544[0x8];
    int32_t m_nElementID;
    char pad_2545[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    CUtlString m_PathName;
    CSmartPropAttributeFloat m_flSpacing;
    CSmartPropAttributeFloat m_flOffsetAlongPath;
    CSmartPropAttributeVector2D m_vPathOffset;
    smartprops_CSmartPropAttributeCoordinateSpace m_PathSpace;
    CSmartPropAttributeBool m_bUseFixedUpDirection;
    CSmartPropAttributeBool m_bUseProjectedDistance;
    CSmartPropAttributeVector m_vUpDirection;
    smartprops_CSmartPropAttributeCoordinateSpace m_UpDirectionSpace;
    CSmartPropAttributeBool m_DefaultPathInWorldSpace;
    char m_DefaultPath[0x18];
};
