#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ControlPointReference_t {
    int32_t m_controlPointNameString;
    Vector m_vOffsetFromControlPoint;
    bool m_bOffsetInLocalSpace;
    char end_pad_2352[0x3];
};
