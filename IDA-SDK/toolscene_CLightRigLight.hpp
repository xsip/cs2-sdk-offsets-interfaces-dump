#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class toolscene_CLightRigLight {
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
    char end_pad_2518[0x2];
};
