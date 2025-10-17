#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CFlexRule {
    int32_t m_nFlex;
    char pad_322[0x4];
    char m_FlexOps[0x18];
};
