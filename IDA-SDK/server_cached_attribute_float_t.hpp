#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_cached_attribute_float_t {
    float32 flIn;
    char pad_2871[0x4];
    CUtlSymbolLarge iAttribHook;
    float32 flOut;
    char end_pad_2872[0x4];
};
