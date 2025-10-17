#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class toolscene_CLightRigSunLight {
    Vector m_vPosition;
    Vector m_vDirection;
    Vector m_vLookAt;
    Color m_Color;
    float32 m_flAxisScale;
    float32 m_flRadius;
    float32 m_flBrightness;
    float32 m_flLightSourceRadius;
    float32 m_flDistance;
    bool m_bRelativePositioning;
    bool m_bParentToCamera;
    char end_pad_2519[0x2];
    float32 m_flShadowCascadeDistance0;
    float32 m_flShadowCascadeDistance1;
    float32 m_flShadowCascadeDistance2;
    float32 m_flShadowCascadeDistance3;
    bool m_bCastShadows;
    char end_pad_2521[0x3];
};
