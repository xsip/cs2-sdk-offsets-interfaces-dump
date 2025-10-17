#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement_Model {
    char vTable2545[0x8];
    int32_t m_nElementID;
    char pad_2546[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    CSmartPropAttributeModelName m_sModelName;
    CSmartPropAttributeMaterialGroup m_MaterialGroupName;
    CSmartPropAttributeBool m_bDetailObject;
    CSmartPropAttributeVector m_vModelScale;
    CSmartPropAttributeFloat m_flUniformModelScale;
    CSmartPropAttributeInt m_nLodLevel;
    CSmartPropAttributeSurfaceProperty m_SurfacePropertyOverride;
    smartprops_SmartPropDetailFadeLevel_t m_nDetailObjectFadeLevel;
    char pad_2552[0x4];
    CSmartPropAttributeBool m_bCastShadows;
    CSmartPropAttributeBool m_bRigidDeformation;
    CSmartPropAttributeBool m_bDisableDynamicDeformable;
};
