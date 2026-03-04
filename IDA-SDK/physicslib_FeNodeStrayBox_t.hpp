#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeNodeStrayBox_t {
    Vector vMin;
    uint32_t nFlags;
    Vector vMax;
    uint16_t nNode[2];
};
