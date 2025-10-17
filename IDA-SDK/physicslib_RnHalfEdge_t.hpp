#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_RnHalfEdge_t {
    uint8_t m_nNext;
    uint8_t m_nTwin;
    uint8_t m_nOrigin;
    uint8_t m_nFace;
};
