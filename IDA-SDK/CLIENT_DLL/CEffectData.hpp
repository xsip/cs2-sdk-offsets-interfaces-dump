#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "AttachmentHandle_t.hpp"

class CEffectData {
    char _vtable_pad_349[0x8];
    VectorWS m_vOrigin;
    VectorWS m_vStart;
    Vector m_vNormal;
    QAngle m_vAngles;
    CEntityHandle m_hEntity;
    CEntityHandle m_hOtherEntity;
    float32 m_flScale;
    float32 m_flMagnitude;
    float32 m_flRadius;
    CUtlStringToken m_nSurfaceProp;
    char m_nEffectIndex[0x8];
    uint32_t m_nDamageType;
    uint8_t m_nPenetrate;
    char pad_350[0x1];
    uint16_t m_nMaterial;
    int16_t m_nHitBox;
    uint8_t m_nColor;
    uint8_t m_fFlags;
    AttachmentHandle_t m_nAttachmentIndex;
    char pad_351[0x3];
    CUtlStringToken m_nAttachmentName;
    uint16_t m_iEffectName;
    uint8_t m_nExplosionType;
    char end_pad_352[0x9];
};
