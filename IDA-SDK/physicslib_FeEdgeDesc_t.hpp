#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeEdgeDesc_t {
    uint16_t nEdge[2];
    uint16_t nSide[2];
    char pad_2437[0x8];
    uint16_t nVirtElem[2];
};
