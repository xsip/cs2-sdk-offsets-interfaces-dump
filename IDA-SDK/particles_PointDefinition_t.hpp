#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_PointDefinition_t {
    int32_t m_nControlPoint;
    bool m_bLocalCoords;
    char pad_2362[0x3];
    Vector m_vOffset;
};
