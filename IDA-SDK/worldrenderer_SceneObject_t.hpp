#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_SceneObject_t {
    uint32_t m_nObjectID;
    Vector4D m_vTransform[3];
    float32 m_flFadeStartDistance;
    float32 m_flFadeEndDistance;
    Vector4D m_vTintColor;
    char pad_2490[0x4];
    CUtlString m_skin;
    worldrenderer_ObjectTypeFlags_t m_nObjectTypeFlags;
    Vector m_vLightingOrigin;
    int16_t m_nOverlayRenderOrder;
    int16_t m_nLODOverride;
    int32_t m_nCubeMapPrecomputedHandshake;
    int32_t m_nLightProbeVolumePrecomputedHandshake;
    char pad_2491[0x4];
    char m_renderableModel[0x8];
    char m_renderable[0x8];
};
