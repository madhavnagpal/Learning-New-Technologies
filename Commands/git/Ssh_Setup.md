#### Configure GitLab SSH keys for secure Git connections

1. Create an SSH key pair on your personal computer

```
ssh-keygen -t rsa -C "your_name@organization_email.com"
```

Give a unique file name like **id_rsa_myscoot**

2. Copy the value of the public SSH key (id_rsa_myscoot.pub)
3. Log into GitLab and navigate to your account’s Preferences tab
4. Create a new GitLab SSH key
5. Paste the public key in as the value and set an expiration date
6. Copy the SSH URL of the GitLab repo you wish to clone
7. Issue a git clone command with the SSH URL

```
touch config
```

In config

```
# Personal account - the default config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa.pub

# Work account
  Host gitlab.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_myscoot
```

#### Ubuntu

Setting up ssh

1 go to home
cd ~
2 remove already existing ssh
rm -rf ssh
3 ssh-keygen -t ed25519 -C "<comment>"
comment may be email id
4 copy ssh
linux xclip -sel clip < ~/.ssh/id_ed25519.pub
5 add on gitlab

6 verify your connection (host name)
ssh -T git@gitlab.example.com
