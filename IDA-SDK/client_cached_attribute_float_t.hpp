#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_cached_attribute_float_t {
    float32 flIn;
    char pad_589[0x4];
    CUtlSymbolLarge iAttribHook;
    float32 flOut;
    char end_pad_590[0x4];
};
