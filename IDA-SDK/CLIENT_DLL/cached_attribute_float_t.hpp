#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class cached_attribute_float_t {
    float32 flIn;
    char pad_26[0x4];
    CUtlSymbolLarge iAttribHook;
    float32 flOut;
    char end_pad_27[0x4];
};
