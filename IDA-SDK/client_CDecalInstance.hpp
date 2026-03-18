#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CDecalInstance {
    CGlobalSymbol m_sDecalGroup;
    char m_hMaterial[0x8];
    CUtlStringToken m_sSequenceName;
    char m_hEntity[0x4];
    int32_t m_nBoneIndex;
    int32_t m_nTriangleIndex;
    Vector m_vPositionLS;
    Vector m_vNormalLS;
    Vector m_vSAxisLS;
    client_DecalFlags_t m_nFlags;
    Color m_Color;
    float32 m_flWidth;
    float32 m_flHeight;
    float32 m_flDepth;
    char pad_1702[0x8];
    CTransformWS m_transform;
    float32 m_flAnimationScale;
    float32 m_flAnimationStartTime;
    entity2_GameTime_t m_flPlaceTime;
    float32 m_flFadeStartTime;
    float32 m_flFadeDuration;
    float32 m_flLightingOriginOffset;
    char pad_1703[0x8];
    float32 m_flBoundingRadiusSqr;
    int16_t m_nSequenceIndex;
    bool m_bIsAdjacent;
    bool m_bDoDecalLightmapping;
    client_DecalRtEncoding_t m_nDecalRtEncoding;
    bool m_bProjectToBackfaces;
    char end_pad_1704[0x6];
};
