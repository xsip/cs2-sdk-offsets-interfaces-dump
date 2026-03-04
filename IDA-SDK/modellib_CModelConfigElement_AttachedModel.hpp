#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CModelConfigElement_AttachedModel {
    void **__vftable_0;
    CUtlString m_ElementName;
    char m_NestedElements[0x18];
    char end_pad_344[0x20];
    CUtlString m_InstanceName;
    CUtlString m_EntityClass;
    char m_hModel[0x8];
    Vector m_vOffset;
    QAngle m_aAngOffset;
    CUtlString m_AttachmentName;
    CUtlString m_LocalAttachmentOffsetName;
    modellib_ModelConfigAttachmentType_t m_AttachmentType;
    bool m_bBoneMergeFlex;
    bool m_bUserSpecifiedColor;
    bool m_bUserSpecifiedMaterialGroup;
    char pad_345[0x1];
    CUtlString m_BodygroupOnOtherModels;
    CUtlString m_MaterialGroupOnOtherModels;
    char end_pad_346[0x48];
};
