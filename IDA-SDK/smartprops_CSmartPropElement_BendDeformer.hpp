#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement_BendDeformer {
    void **__vftable_0;
    int32_t m_nElementID;
    char pad_2621[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    CSmartPropAttributeBool m_bDeformationEnabled;
    CSmartPropAttributeVector m_vOrigin;
    CSmartPropAttributeAngles m_vAngles;
    CSmartPropAttributeVector m_vSize;
    CSmartPropAttributeFloat m_flBendAngle;
    CSmartPropAttributeFloat m_flBendPoint;
    CSmartPropAttributeFloat m_flBendRadius;
};
