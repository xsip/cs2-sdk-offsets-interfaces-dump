#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement_MidpointDeformer {
    void **__vftable_0;
    int32_t m_nElementID;
    char pad_2640[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    char m_Children[0x18];
    CSmartPropAttributeBool m_bDeformationEnabled;
    CSmartPropAttributeVector m_vStart;
    CSmartPropAttributeVector m_vEnd;
    CSmartPropAttributeFloat m_fRadius;
    CSmartPropAttributeBool m_bContinuousSpline;
    CSmartPropAttributeVector m_vOffset;
    CSmartPropAttributeAngles m_vAngles;
    CSmartPropAttributeVector2D m_vScale;
    CSmartPropAttributeFloat m_fFalloff;
    CUtlString m_OutputVariable;
};
