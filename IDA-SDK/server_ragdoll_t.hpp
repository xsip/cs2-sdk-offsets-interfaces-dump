#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_ragdoll_t {
    char list[0x18];
    char hierarchyJoints[0x18];
    char boneIndex[0x18];
    bool allowStretch;
    bool unused;
    char pad_3986[0x6];
};
