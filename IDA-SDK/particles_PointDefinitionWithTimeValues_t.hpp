#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_PointDefinitionWithTimeValues_t {
    int32_t m_nControlPoint;
    bool m_bLocalCoords;
    char pad_2363[0x3];
    Vector m_vOffset;
    float32 m_flTimeDuration;
};
