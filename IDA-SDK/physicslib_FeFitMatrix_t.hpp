#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeFitMatrix_t {
    CTransform bone;
    Vector vCenter;
    uint16_t nEnd;
    uint16_t nNode;
    uint16_t nBeginDynamic;
    char end_pad_2438[0xe];
};
