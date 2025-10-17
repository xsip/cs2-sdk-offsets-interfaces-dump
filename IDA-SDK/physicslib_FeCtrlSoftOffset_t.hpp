#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeCtrlSoftOffset_t {
    uint16_t nCtrlParent;
    uint16_t nCtrlChild;
    Vector vOffset;
    float32 flAlpha;
};
