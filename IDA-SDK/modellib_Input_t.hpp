#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_Input_t {
    Vector m_inputValue;
    char pad_316[0x4];
    char m_outputWeightList[0x18];
};
