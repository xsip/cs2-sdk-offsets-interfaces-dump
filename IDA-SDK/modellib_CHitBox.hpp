#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CHitBox {
    CUtlString m_name;
    CUtlString m_sSurfaceProperty;
    CUtlString m_sBoneName;
    Vector m_vMinBounds;
    Vector m_vMaxBounds;
    float32 m_flShapeRadius;
    uint32_t m_nBoneNameHash;
    int32_t m_nGroupId;
    uint8_t m_nShapeType;
    bool m_bTranslationOnly;
    char pad_329[0x2];
    uint32_t m_CRC;
    Color m_cRenderColor;
    uint16_t m_nHitBoxIndex;
    char end_pad_330[0x26];
};
