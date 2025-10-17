#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_RnNode_t {
    Vector m_vMin;
    uint32_t m_nChildren;
    Vector m_vMax;
    uint32_t m_nTriangleOffset;
};
