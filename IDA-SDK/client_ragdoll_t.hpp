#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_ragdoll_t {
    char list[0x18];
    char hierarchyJoints[0x18];
    char boneIndex[0x18];
    bool allowStretch;
    bool unused;
    char pad_3985[0x6];
};
