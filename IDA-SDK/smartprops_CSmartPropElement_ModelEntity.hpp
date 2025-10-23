#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropElement_ModelEntity {
    char vTable2544[0x8];
    int32_t m_nElementID;
    char pad_2545[0x4];
    CSmartPropAttributeBool m_bEnabled;
    CUtlString m_sLabel;
    char m_SelectionCriteria[0x18];
    char m_Modifiers[0x18];
    CSmartPropAttributeModelName m_sModelName;
    CSmartPropAttributeMaterialGroup m_MaterialGroupName;
    CSmartPropAttributeBool m_bCastShadows;
    CSmartPropAttributeBool m_bForceStatic;
    smartprops_SmartPropDeformableAttachMode_t m_nDeformableAttachmentMode;
    smartprops_SmartPropDeformableOrientMode_t m_nDeformableOrientationMode;
};
