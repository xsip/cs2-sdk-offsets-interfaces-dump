#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CDecalInstance {
    CGlobalSymbol m_sDecalGroup;
    char m_hMaterial[0x8];
    CUtlStringToken m_sSequenceName;
    char m_hEntity[0x4];
    int32_t m_nBoneIndex;
    int32_t m_nTriangleIndex;
    Vector m_vPositionLS;
    Vector m_vNormalLS;
    Vector m_vSAxisLS;
    DecalFlags_t m_nFlags;
    Color m_Color;
    float32 m_flWidth;
    float32 m_flHeight;
    float32 m_flDepth;
    float32 m_flAnimationScale;
    GameTime_t m_flPlaceTime;
    float32 m_flFadeStartTime;
    float32 m_flFadeDuration;
    float32 m_flLightingOriginOffset;
    char pad_341[0xc];
    float32 m_flBoundingRadiusSqr;
    int16_t m_nSequenceIndex;
    bool m_bIsAdjacent;
    bool m_bDoDecalLightmapping;
    DecalMode_t m_nSkinnedModelMode;
    char end_pad_342[0x7];
};
