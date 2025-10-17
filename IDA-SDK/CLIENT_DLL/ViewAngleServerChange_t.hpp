#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class ViewAngleServerChange_t {
    char _vtable_pad_1093[0x30];
    FixAngleSet_t nType;
    char pad_1094[0x3];
    QAngle qAngle;
    uint32_t nIndex;
    char end_pad_1095[0x4];
};
