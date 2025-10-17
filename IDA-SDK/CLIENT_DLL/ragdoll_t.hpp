#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class ragdoll_t {
    char list[0x18];
    char hierarchyJoints[0x18];
    char boneIndex[0x18];
    bool allowStretch;
    bool unused;
    char end_pad_1106[0x6];
};
