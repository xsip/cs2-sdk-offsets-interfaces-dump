#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeNodeBase_t {
    uint16_t nNode;
    uint16_t nDummy[3];
    uint16_t nNodeX0;
    uint16_t nNodeX1;
    uint16_t nNodeY0;
    uint16_t nNodeY1;
    QuaternionStorage qAdjust;
};
