#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeScaleMode.hpp"
#include "smartprops_CSmartPropAttributePickMode.hpp"

class smartprops_CSmartPropElement_FitOnLine {
    char vTable2545[0x8];
    int32_t m_nElementID;
    char pad_2546[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    CSmartPropAttributeVector m_vStart;
    CSmartPropAttributeVector m_vEnd;
    smartprops_CSmartPropAttributeCoordinateSpace m_PointSpace;
    CSmartPropAttributeBool m_bOrientAlongLine;
    CSmartPropAttributeVector m_vUpDirection;
    smartprops_CSmartPropAttributeCoordinateSpace m_UpDirectionSpace;
    CSmartPropAttributeBool m_bPrioritizeUp;
    smartprops_CSmartPropAttributeScaleMode m_nScaleMode;
    smartprops_CSmartPropAttributePickMode m_nPickMode;
};
