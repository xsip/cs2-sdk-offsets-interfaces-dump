#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_cached_attribute_float_t {
    float32 flIn;
    char pad_1376[0x4];
    CUtlSymbolLarge iAttribHook;
    float32 flOut;
    char end_pad_1377[0x4];
};
